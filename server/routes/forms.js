import express from "express";
import FormsController from "../controllers/forms";

const router = express.Router();

/* GET users listing. */
router.get("/fetch", async (req, res) => {
  try {
    const result = await FormsController.fetchForms(req.query);
    res.json({
      success: true,
      data: result,
    });
  } catch (e) {
    res.json({
      success: false,
      data: e,
    });
  }
});

router.post("/add", async (req, res) => {
  try {
    const result = await FormsController.createForm(req.body);
    res.json({
      success: true,
      data: result,
    });
  } catch (e) {
    res.json({
      success: false,
      data: e,
    });
  }
});

router.post("/card/create", async (req, res) => {
  try {
    const result = await FormsController.createCardContent(req.body);
    res.json({
      success: true,
      data: result,
    });
  } catch (e) {
    res.json({
      success: false,
      data: e,
    });
  }
});

router.post("/remove", async (req, res) => {
  try {
    const result = await FormsController.removeForm(req.body);
    res.json({
      success: true,
      data: result,
    });
  } catch (e) {
    res.json({
      success: false,
      data: e,
    });
  }
});
router.post("/card/remove", async (req, res) => {
  try {
    const result = await FormsController.removeCard(req.body);
    res.json({
      success: true,
      data: result,
    });
  } catch (e) {
    res.json({
      success: false,
      data: e,
    });
  }
});

export default router;
