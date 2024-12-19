const express = require("express");

const router = express.Router();

const prodiController = require("../controllers/prodiController");

router.get("/", prodiController.getAllProdi);

router.post("/", prodiController.createProdi);

router.post(
    "/",
    authMiddleware,
    roleMiddleware("admin"),
    prodiController.createProdi
);

router.get("/:id", prodiController.getProdiById);

router.put(
    "/",
    authMiddleware,
    roleMiddleware("admin"),
    prodiController.updateProdi
);

router.put("/:id", prodiController.updateProdi);

router.delete("/:id", prodiController.deleteProdi);

router.delete(
    "/",
    authMiddleware,
    roleMiddleware("admin"),
    prodiController.deleteProdi
);

module.exports = router;
