import {
	Body,
	Container,
	Column,
	Head,
	Heading,
	Hr,
	Html,
	Img,
	Link,
	Preview,
	Row,
	Section,
	Text,
} from "@react-email/components";
import Footer from "../Footer";
import { PropsWithChildren } from "react";

function EmailShell({ children, preview }: PropsWithChildren<{ preview: string }>) {
	return (
		<Html>
			<Head />
			<Preview> {preview}</Preview>
			<Body style={main}>
				<Container style={container}>
					{children}
					<Footer />
				</Container>
			</Body>
		</Html>
	);
}

export default EmailShell;

const main = {
	backgroundColor: "#ffffff",
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
	margin: "10px auto",
	width: "700px",
	border: "1px solid #E5E5E5",
};
