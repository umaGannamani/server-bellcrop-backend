const router = require("express").Router();
const Registration = require("../models/Registration");
const Event = require("../models/Event");
const protect = require("../middleware/protect");

// 🔹 Get logged-in user's registered events
router.get("/my-events", protect, async (req, res) => {
  try {
    const registrations = await Registration.find({
      user: req.user.id,
    }).populate("event");

    const events = registrations.map((reg) => reg.event);

    res.json(events);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


// 🔹 Register for an event
router.post("/:eventId", protect, async (req, res) => {
  try {
    const event = await Event.findById(req.params.eventId);

    // 1️⃣ Check event exists
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    // 2️⃣ Check already registered
    const already = await Registration.findOne({
      user: req.user._id,
      event: event._id,
    });

    if (already) {
      return res.status(400).json({ message: "Already Registered" });
    }

    // 3️⃣ Check seat availability
    if (event.availableSeats <= 0) {
      return res.status(400).json({ message: "Event is Fully Booked" });
    }

    // 4️⃣ Create registration
    await Registration.create({
      user: req.user._id,
      event: event._id,
    });

    // 5️⃣ Reduce available seats
    event.availableSeats -= 1;
    await event.save();

    res.json({
      message: "Registered Successfully",
      availableSeats: event.availableSeats,
      capacity: event.capacity,
    });

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// 🔹 Cancel Registration
router.delete("/:eventId", protect, async (req, res) => {
  try {
    const event = await Event.findById(req.params.eventId);

    if (!event)
      return res.status(404).json({ message: "Event not found" });

    const registration = await Registration.findOne({
      user: req.user._id,
      event: event._id
    });

    if (!registration)
      return res.status(400).json({ message: "Not registered for this event" });

    // Delete registration
    await registration.deleteOne();

    // Increase available seats
    event.availableSeats += 1;
    await event.save();

    res.json({
      message: "Registration Cancelled",
      availableSeats: event.availableSeats
    });

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


module.exports = router;
