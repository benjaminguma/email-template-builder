this.addEventListener("activate", function (event) {
	console.log("activated");
});
this.addEventListener("push", async function (event) {
	const message = await event.data.json();

	let { title, body } = message.data;
	await event.waitUntil(
		this.registration.showNotification(title, {
			body,
			icon: "https://res.cloudinary.com/dqydioa17/image/upload/v1692193691/nfdseqc00ej9iijkdm4c.png",
		}),
	);
});
