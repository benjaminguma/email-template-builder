import type { AppProps } from "next/app";

import "../../styles/main.scss";
import { AppPropsType, NextComponentType } from "next/dist/shared/lib/utils";

type CustomAppProps = AppPropsType & {
	Component: NextComponentType & { protected?: boolean }; //
	pageProps: any;
};

export default function App({ Component, pageProps }: CustomAppProps) {
	return <Component {...pageProps} />;
}
