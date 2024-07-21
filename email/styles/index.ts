import { orderData } from "@components/order/interfaces";

export const paddingX = {
	paddingLeft: "40px",
	paddingRight: "40px",
};

export const paddingY = {
	paddingTop: "22px",
	paddingBottom: "22px",
};

export const paragraph = {
	margin: "0",
	lineHeight: "2",
};
export const global = {
	paddingX,
	paddingY,
	defaultPadding: {
		...paddingX,
		...paddingY,
	},
	paragraphWithBold: { ...paragraph, fontWeight: "bold" },
	heading: {
		fontSize: "32px",
		lineHeight: "1.3",
		fontWeight: "700",
		textAlign: "center",
		letterSpacing: "-1px",
	} as React.CSSProperties,
	text: {
		...paragraph,
		color: "#747474",
		fontWeight: "500",
	},
	button: {
		border: "1px solid #929292",
		fontSize: "16px",
		textDecoration: "none",
		padding: "10px 20px",
		display: "block",
		textAlign: "center",
		fontWeight: 500,
		color: "#000",
	} as React.CSSProperties,
	hr: {
		borderColor: "#E5E5E5",
		margin: "0",
	},
};
export const dummyOrder: orderData = {
	eta: {
		label: "4 days",
		value: 4,
	},
	date_updated: 1692221605586,
	tracking_id: "011110113617222876354790",
	email: "1@yopmail.com",
	payment_status: "paid",
	groups: [
		{
			germent_count: 1,
			category: "Towels",
			item: "Bath towel(small)",
			color: "",
			description: "",
			services: {
				iron: false,
				"wash only rate": true,
			},
			id: "",
			item_name_lowercase: "",
			germentItemData: {
				"wash only rate": 250,
				"ETA 1": 1.9,
				item_name_lowercase: "bath_towel(small)",
				starch: 0,
				item: "Bath towel(small)",
				"extra wash/whiten": "",
				"ETA 3": 1.3,
				id: "YmF0aF90b3dlbChzbWFsbCk=",
				"ETA 2": 1.6,
				thumbnail: "towel-hand.avif",
				iron: 50,
				"ETA default(4days)": 1,
				category: "Towels",
			},
			temp_id: "__))",
		},
	],
	total_germent_count: 1,
	date_created: 1692221585633,
	total_cost: 290,
	order_state: "0",
	delivery: {
		street: "",
	},
	pickup: {
		street: "",
	},
	order_id: "858e7543-e5b9-4c4c-a17e-04c13eb34bf8",
	phone_number: "08141908042",
};
