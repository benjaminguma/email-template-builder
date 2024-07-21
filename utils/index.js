import axios from "axios";
import Papa from "papaparse";

const readFile = (file, regex, binary = false) =>
	new Promise((res, rej) => {
		const reader = new FileReader();
		// console.log({ name: file.name, r: regex });

		if (!regex.test(file.name) && file.name) throw Error("files not supported ");
		reader.addEventListener("load", () => res(reader.result));
		reader.addEventListener("error", () => rej(reader.error));
		if (binary) {
			reader.readAsArrayBuffer(file);
		} else reader.readAsDataURL(file);
	});

async function parseImagesB64(files, regex, count, size = 0) {
	if (files.length > count)
		throw Error(`Only a maximum of ${count} ${count === 1 ? "file is" : "files are"} allowed`);
	console.log({ ffile: files });
	const processedFiles = [];
	for (let file of files) {
		try {
			if (size && file?.size > size) {
				throw Error(`Each file should have a maximum size of ${size / 1024 / 1024}MB`);
			}
			const b64File = await readFile(file, regex);
			processedFiles.push(b64File);
		} catch (error) {
			throw error;
		}
	}
	return processedFiles;
}

const formatDigits = (number) => {
	let str = number.toString().split("").reverse().join("");
	return str
		.replace(/(\d{3})(?!$)/g, (_, b) => b + ",")
		.split("")
		.reverse()
		.join("");
};

const cleanDataURI = (data) => data.map((img) => img.replace(/^data:image\/(jpeg|png|jpg|webp);base64,/i, ""));

const cap = (text) => (text ? text[0].toUpperCase() + text.slice(1) : "");

const getInitials = (str = "") => {
	str = str.split(" ");
	const res = [];
	for (let i = 0; i < 2; i++) {
		if (!str[i]) continue;
		res.push(str[i].charAt(0).toUpperCase());
	}
	return res;
};

const parseDateToNum = (clb) => (chunk) => {
	let { payload } = chunk;
	payload = new Date(payload).getTime();

	chunk.payload = payload;
	clb(chunk);
};

const parseNumToDate = (timeStamp) => (timeStamp === 0 ? "" : new Date(timeStamp).toLocaleDateString("fr-CA"));

const papaConfig = {
	delimiter: "", // auto-detect
	newline: "", // auto-detect
	quoteChar: '"',
	escapeChar: '"',
	header: true,
	dynamicTyping: false,
	preview: 0,
	encoding: "",
	worker: false,
	comments: false,
	download: false,
	skipEmptyLines: true,
	delimitersToGuess: [",", "\t", "|", ";", Papa.RECORD_SEP, Papa.UNIT_SEP],
};
const convertCSVFileToJSON = async (file, options = {}) => {
	return new Promise((res, rej) => {
		Papa.parse(file, {
			...papaConfig,
			header: true,
			...options,
			complete: (data) => res(data.data),
		});
	});
};
const years = [];

const thisYear = new Date().getFullYear();

for (let i = thisYear; i > thisYear - 8; i--) {
	years.push({
		label: i.toString(),
		value: i.toString(),
	});
}

export {
	formatDigits,
	readFile,
	cleanDataURI,
	cap,
	getInitials,
	parseDateToNum,
	parseNumToDate,
	convertCSVFileToJSON,
	years,
};
