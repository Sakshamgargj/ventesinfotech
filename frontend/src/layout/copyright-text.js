import Link from "next/link";
import React from "react";

const CopyrightText = () => {
  return (
    <p className="text-center">
      Copyright © {new Date().getFullYear()} 
       {/* <Link href="/"></Link>. {' '} */}
      All rights reserved.
    </p>
  );
};

export default CopyrightText;
