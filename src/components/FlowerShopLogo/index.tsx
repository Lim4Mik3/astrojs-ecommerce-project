import { memo } from "react";

function FlowerShopLogo() {
  return (
    <div className="flex font-medium text-3xl">
      <p className="text-orange-500">Flower</p>
      <p className="ml-1">Shop</p>
    </div>
  );
}

export default memo(FlowerShopLogo);
