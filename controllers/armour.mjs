import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createArmour = async (req, res) => {
    try {
        const contentType = req.headers["content-type"];
        if (!contentType || contentType !== "application/json") {
            return res.status(400).json({
                msg: "Invalid Content-Type. Expected application/json.",
            });
        }

        await prisma.institution.create({
            data: { ...req.body },
        });

        const newArmours = await prisma.armour.findMany();

        return res.status(201).json({
            msg: "Armour successfully created",
            data: newArmours,
        });
    } catch (err) {
        return res.status(500).json({
            msg: err.message,
        });
    }
};

const getArmours = async (req, res) => {
    try {
        const armours = await prisma.armour.findMany();

        if (armours.length === 0) {
            return res.status(404).json({ msg: "No armours found" });
        }

        return res.json({ data: armours });
    } catch (err) {
        return res.status(500).json({
            msg: err.message,
        });
    }
};

const getArmour = async (req, res) => {
    try {
        const armour = await prisma.armour.findUnique({
            where: { id: Number(req.params.id) },
        });

        if (!armour) {
            return res
                .status(404)
                .json({ msg: `No armour with the id: ${req.params.id} found` });
        }

        return res.json({
            data: armour,
        });
    } catch (err) {
        return res.status(500).json({
            msg: err.message,
        });
    }
};

const updateArmour = async (req, res) => {
    try {
        const contentType = req.headers["content-type"];
        if (!contentType || contentType !== "application/json") {
            return res.status(400).json({
                msg: "Invalid Content-Type. Expected application/json.",
            });
        }

        let armour = await prisma.armour.findUnique({
            where: { id: Number(req.params.id) },
        });

        if (!armour) {
            return res
                .status(404)
                .json({ msg: `No armour with the id: ${req.params.id} found` });
        }

        armour = await prisma.armour.update({
            where: { id: Number(req.params.id) },
            data: { ...req.body },
        });

        return res.json({
            msg: `Armour with the id: ${req.params.id} successfully updated`,
            data: armour,
        });
    } catch (err) {
        return res.status(500).json({
            msg: err.message,
        });
    }
};


const deleteArmour = async (req, res) => {
    try {
      const armour = await prisma.armour.findUnique({
        where: { id: Number(req.params.id) },
      });
  
      if (!armour) {
        return res
          .status(404)
          .json({ msg: `No armour with the id: ${req.params.id} found` });
      }
  
      await prisma.armour.delete({
        where: { id: Number(req.params.id) },
      });
  
      return res.json({
        msg: `Armour with the id: ${req.params.id} successfully deleted`,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };


export { createArmour, getArmours, getArmour, updateArmour, deleteArmour };