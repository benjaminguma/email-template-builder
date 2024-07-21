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
import Footer from "./Footer";
import * as React from "react";
import { dummyOrder, global, paragraph } from "./styles";
import Message from "./Message";
import EmailShell from "./Layout/EmailShell";
import { orderData } from "@components/order/interfaces";
import { computeOverallCost } from "@components/order/utils/orderUtils";

export const OlivePlaceOrderEmail = ({
	order = dummyOrder,
	computedCost = {
		totalCost: 200,
		totalNumberOfGermrnts: 1,
		vat: 50,
	},
}: {
	order: orderData;
	computedCost: ReturnType<typeof computeOverallCost>;
}) => (
	<EmailShell preview='your order summary, estimated pickup date and more'>
		<OrdeTrackingInfo order={order} />
		<Message
			title='Order Placed Successfully 🚀'
			p1='We are on the way to pickup your clothes'
			p2='We´ve also charged your payment method for the cost of your order'
		/>

		<Hr style={global.hr} />
		<Section style={global.defaultPadding}>
			<Section style={{ marginBottom: 40 }}>
				<Column style={{ width: "33.3%" }}>
					<Text style={global.paragraphWithBold}>Order Number</Text>
					<Text style={track.number}>{order.date_created}</Text>
				</Column>
				<Column style={{ width: "33.3%" }}>
					<Text style={global.paragraphWithBold}>Order Date</Text>
					<Text style={track.number}>{new Date(order.date_created).toLocaleDateString()}</Text>
				</Column>
				<Column style={{ width: "33.3%" }}>
					<Text style={global.paragraphWithBold}>Pickup Agent</Text>
					<Text style={track.number}>Olives Pickup Agent</Text>
				</Column>
			</Section>
			<Section>
				<Column align='center'>
					<Link style={global.button}>View order details</Link>
				</Column>
			</Section>
		</Section>

		<Hr style={global.hr} />
		<Section style={global.defaultPadding}>
			<Section style={{ marginBottom: 40 }}>
				<Column style={{ width: "33.3%" }}>
					<Text style={global.paragraphWithBold}>Total Cost</Text>
					<Text style={track.number}>{computedCost.totalCost + computedCost.vat}</Text>
				</Column>
				<Column style={{ width: "33.3%" }}>
					<Text style={global.paragraphWithBold}>No of Clothes</Text>
					<Text style={track.number}>{computedCost.totalNumberOfGermrnts}</Text>
				</Column>
				<Column style={{ width: "33.3%" }}>
					<Text style={global.paragraphWithBold}>Payment Status</Text>
					<Text
						style={{
							...track.number,
							color: "green",
							fontWeight: 700,
						}}
					>
						PAID
					</Text>
				</Column>
			</Section>
		</Section>
	</EmailShell>
);

export default OlivePlaceOrderEmail;

const track = {
	container: {
		padding: "22px 40px",
		backgroundColor: "#F7F7F7",
		width: "100%",
	},
	number: {
		margin: "12px 0 0 0",
		fontWeight: 500,
		lineHeight: "1",

		color: "#6F6F6F",
		fontSize: "12px",
	},
};

const adressTitle = {
	...paragraph,
	fontSize: "15px",
	fontWeight: "bold",
};

export function OrdeTrackingInfo({ order }: { order: orderData }) {
	return (
		<Section style={track.container}>
			<Column>
				<Text style={global.paragraphWithBold}>Tracking Number</Text>
				<Text style={track.number}>{order.tracking_id}</Text>
			</Column>
			<Column align='right' style={{ marginLeft: "10px" }}>
				<Link style={global.button}>Track Laundry</Link>
			</Column>
		</Section>
	);
}

export function OrderAddress({ h, p }: { h: string; p: string }) {
	return (
		<Section style={global.defaultPadding}>
			<Text style={adressTitle}>{h} </Text>
			<Text style={{ ...global.text, fontSize: 14 }}>{p}</Text>
		</Section>
	);
}
