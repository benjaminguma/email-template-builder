import React from "react";
import EmailShell from "./Layout/EmailShell";
import { OrdeTrackingInfo, OrderAddress } from "./index";
import Message from "./Message";
import { orderData } from "@components/order/interfaces";
import { dummyOrder } from "./styles";

function OrderDeliveredEmail({ order = dummyOrder }: { order?: orderData }) {
	return (
		<EmailShell preview='your clothes have been delivered'>
			<OrdeTrackingInfo order={order} />
			<Message
				title='your clothes have been delivered 🌟'
				p1={`your clothes were deliverd to your door step`}
			/>
			<OrderAddress h='delivered to' p={"L19 Gwagwalada Abuja"} />
		</EmailShell>
	);
}

export default OrderDeliveredEmail;
