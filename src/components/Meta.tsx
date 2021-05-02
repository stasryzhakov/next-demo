import { Head } from "next/document";
import { FC } from "react";

type MetaType = {
  title?: string;
};

export const Meta: FC<MetaType> = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
    </>
  );
};
