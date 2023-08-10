"use client";
import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("3a8e8f5c-9a3b-4836-ace9-2fa49a23efca");
  }, []);

  return null;
};
