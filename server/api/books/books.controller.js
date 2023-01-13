import { Router } from "express";

const router = Router();

router.get("/api/books", (req, res) => {
    res.send({ some: "book" });
});
export default router;
