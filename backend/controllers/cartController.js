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

module.exports.removeCart = async (req, res) => {
  try {
    const itemId = req.params.id;
    const userId = req.user._id;

    const user = await User.findByIdAndUpdate(
      userId,
      { $pull: { cart: { _id: itemId } } },
      { new: true }
    ).populate("cart.productId");

    // Filter out any null products that might still be lingering 
    // This prevents the "Cannot read properties of null" error on the next load
    user.cart = user.cart.filter(item => item.productId !== null);
    await user.save();

    res.status(200).json({ success: true, cart: user.cart });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};