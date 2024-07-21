import React from "react";
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
import { global } from "./styles";

function Message({ title, p1, p2 }: { title: string; p1: string; p2?: string }) {
	return (
		<>
			<Hr style={global.hr} />
			<Section style={message}>
				<Heading style={global.heading}>{title}</Heading>
				<Text style={global.text}>{p1}</Text>
				{p2 ? <Text style={{ ...global.text, marginTop: 4 }}>{p2}</Text> : null}
			</Section>
			<Hr style={global.hr} />
		</>
	);
}

export default Message;

const message = {
	padding: "40px 74px",
	textAlign: "center",
} as React.CSSProperties;
