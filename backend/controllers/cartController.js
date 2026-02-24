const User=require("../models/user");
const Product=require("../models/product");

module.exports.addCart= async (req, res) => {
  try {
    const { userId, productId } = req.body;

    console.log(userId, productId); // 👈 ADD THIS

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const existingItem = user.cart.find(
      item => item.productId.toString() === productId
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      user.cart.push({ productId });
    }

    await user.save();

    res.json({ success: true });

  } catch (err) {
    console.error(err); // 👈 MUST
    res.status(500).json({ message: "Server error" });
  }
};

module.exports.getCart=async(req, res)=>{
      try {
    const userId = req.user._id;

    const user = await User.findById(userId)
      .populate("cart.productId");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user.cart);
  } catch (err) {
    console.error("GET CART ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
}