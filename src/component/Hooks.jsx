import React, { useEffect, useState } from "react";

import { useTimeout } from "../Hooks/customHooks";

export default function () {
  const isReady = useTimeout(2000);
  return (
    <div>
      <h3>Custom Hooks</h3>

      {isReady && "Ready"}
      {!isReady && "Not Ready"}
    </div>
  );
}
