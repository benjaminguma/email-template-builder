import React from "react";
import { Column, Hr, Img, Link, Row, Section, Text } from "@react-email/components";
import { global, paddingY } from "./styles";

function Footer() {
	return (
		<>
			<Hr style={global.hr} />
			<Section style={menu.container}>
				<Text style={menu.title}>Get Help</Text>
				<Section style={menu.content}>
					<Column style={{ width: "33%" }} colSpan={1}>
						<Link href='/' style={menu.text}>
							Pickup Status
						</Link>
					</Column>
					<Column style={{ width: "33%" }} colSpan={1}>
						<Link href='/' style={menu.text}>
							Shipping & Delivery
						</Link>
					</Column>
					<Column style={{ width: "33%" }} colSpan={1}>
						<Link href='/' style={menu.text}>
							Returns & Exchanges
						</Link>
					</Column>
				</Section>
				<Section style={{ ...menu.content, paddingTop: "0" }}>
					<Column style={{ width: "33%" }} colSpan={1}>
						<Link href='/' style={menu.text}>
							How to Return
						</Link>
					</Column>
					<Column style={{ width: "66%" }} colSpan={2}>
						<Link href='/' style={menu.text}>
							Contact Options
						</Link>
					</Column>
				</Section>
				<Hr style={global.hr} />
				<Row style={menu.tel}>
					<Column>
						<Row>
							<Column style={{ width: "16px" }}>
								<Img
									src={`https://res.cloudinary.com/dqydioa17/image/upload/v1692271788/yrtxe8gdhwhzkzz9atrc.png`}
									width='26px'
									height='26px'
									style={{ paddingRight: "14px" }}
								/>
							</Column>
							<Column>
								<Text style={{ ...menu.text, marginBottom: "0" }}>081XXXXXXXX</Text>
							</Column>
						</Row>
					</Column>
					<Column>
						<Text
							style={{
								...menu.text,
								marginBottom: "0",
							}}
						>
							4 am - 11 pm WAT
						</Text>
					</Column>
				</Row>
			</Section>
			<Hr style={global.hr} />
			<Section style={paddingY}>
				<Text style={global.heading}>Olive.ng</Text>
				<Row style={categories.container}>
					<Column align='center'>
						<Link href='/' style={categories.text}>
							Gold
						</Link>
					</Column>
					<Column align='center'>
						<Link href='/' style={categories.text}>
							Silver
						</Link>
					</Column>
					<Column align='center'>
						<Link href='/' style={categories.text}>
							Bronze
						</Link>
					</Column>
				</Row>
			</Section>
			<Hr style={{ ...global.hr, marginTop: "12px" }} />
			<Section style={paddingY}>
				<Row style={footer.policy}>
					<Column>
						<Text style={footer.text}>Web Version</Text>
					</Column>
					<Column>
						<Text style={footer.text}>Privacy Policy</Text>
					</Column>
				</Row>
				<Text style={{ ...footer.text, paddingTop: 30, paddingBottom: 30 }}>
					Please contact us if you have any questions. (If you reply to this email, we won't be able to
					see it.)
				</Text>
				<Text style={footer.text}>© 2023 Olive ventures All Rights Reserved.</Text>
				<Text style={footer.text}>Olive Laundry</Text>
			</Section>
		</>
	);
}

export default Footer;

const menu = {
	container: {
		paddingLeft: "20px",
		paddingRight: "20px",
		paddingTop: "20px",
		backgroundColor: "#F7F7F7",
		width: "100%",
	},
	content: {
		...global.paddingY,
		paddingLeft: "20px",
		paddingRight: "20px",
	},
	title: {
		paddingLeft: "20px",
		paddingRight: "20px",
		fontWeight: "bold",
	},
	text: {
		fontSize: "13.5px",
		marginTop: 0,
		fontWeight: 500,
		color: "#000",
	},
	tel: {
		paddingLeft: "20px",
		paddingRight: "20px",
		paddingTop: "32px",
		paddingBottom: "22px",
	},
};

const categories = {
	container: {
		width: "370px",
		margin: "auto",
		paddingTop: "12px",
	},
	text: {
		fontWeight: "500",
		color: "#000",
	},
};

const footer = {
	policy: {
		width: "166px",
		margin: "auto",
	},
	text: {
		margin: "0",
		color: "#AFAFAF",
		fontSize: "13px",
		textAlign: "center",
	} as React.CSSProperties,
};
