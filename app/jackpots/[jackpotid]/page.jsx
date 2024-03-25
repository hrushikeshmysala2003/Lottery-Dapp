"use client";

import React, { useState } from "react";
import Head from "next/head";
import SubHeader from "@/components/SubHeader";
import JackpotTable from "@/components/JackpotTable";
export default function Create() {
  return (
    <div>
      <Head>
        <title>Dapp Lottery - Jackpot</title>
        <link rel="icon" href="/app/favicon.ico" />
      </Head>
      {/* <SubHeader /> */}
      <JackpotTable />
      {/* <h4>Hello</h4> */}
    </div>
  );
}
