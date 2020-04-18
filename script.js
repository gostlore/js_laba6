let mapA = new Map();

mapA.set("Cisco","S_Pro");
mapA.set("IBM","Watson");
mapA.set("Microsoft","Azure");
mapA.set("Amazon","Web Services IoT");

let mapB = new Map();

mapB.set("Cisco",4200);
mapB.set("IBM",5200);
mapB.set("Microsoft",12000);
mapB.set("Amazon",1500);

let mapC = new Map();

mapC.set("Cisco",5);
mapC.set("IBM",1);
mapC.set("Microsoft",2);
mapC.set("Amazon",3);

let lowPrice = function() {
	let a = mapB.get("Cisco")
	let b = mapB.get("IBM")
	let c = mapB.get("Microsoft")
	let d = mapB.get("Amazon")

	if(a == Math.min(a, b, c, d)) {
		console.log(`${mapA.get("Cisco")} / ${mapB.get("Cisco")} / ${mapC.get("Cisco")}day`)
	}else if(b == Math.min(b, a, c, d)) {
		console.log(`${mapA.get("IBM")} / ${mapB.get("IBM")} / ${mapC.get("IBM")}day`)
	}else if(c == Math.min(a, b, c, d)) {
		console.log(`${mapA.get("Microsoft")} / ${mapB.get("Microsoft")} / ${mapC.get("Microsoft")}day`)
	}else if(d == Math.min(a, b, c, d)) {
		console.log(`${mapA.get("Amazon")} / ${mapB.get("Amazon")} / ${mapC.get("Amazon")}day`)
	}

}

let lowTime = function() {
	let a = mapC.get("Cisco")
	let b = mapC.get("IBM")
	let c = mapC.get("Microsoft")
	let d = mapC.get("Amazon")

	if(a == Math.min(a, b, c, d)) {
		console.log(`${mapA.get("Cisco")} / ${mapB.get("Cisco")} / ${mapC.get("Cisco")}day`)
	}else if(b == Math.min(b, a, c, d)) {
		console.log(`${mapA.get("IBM")} / ${mapB.get("IBM")} / ${mapC.get("IBM")}day`)
	}else if(c == Math.min(a, b, c, d)) {
		console.log(`${mapA.get("Microsoft")} / ${mapB.get("Microsoft")} / ${mapC.get("Microsoft")}day`)
	}else if(d == Math.min(a, b, c, d)) {
		console.log(`${mapA.get("Amazon")} / ${mapB.get("Amazon")} / ${mapC.get("Amazon")}day`)
	}

}

let maxPrice = function() {
	let a = mapB.get("Cisco")
	let b = mapB.get("IBM")
	let c = mapB.get("Microsoft")
	let d = mapB.get("Amazon")

	if(a == Math.max(a, b, c, d)) {
		console.log(`${mapA.get("Cisco")} / ${mapB.get("Cisco")} / ${mapC.get("Cisco")}day`)
	}else if(b == Math.max(b, a, c, d)) {
		console.log(`${mapA.get("IBM")} / ${mapB.get("IBM")} / ${mapC.get("IBM")}day`)
	}else if(c == Math.max(a, b, c, d)) {
		console.log(`${mapA.get("Microsoft")} / ${mapB.get("Microsoft")} / ${mapC.get("Microsoft")}day`)
	}else if(d == Math.max(a, b, c, d)) {
		console.log(`${mapA.get("Amazon")} / ${mapB.get("Amazon")} / ${mapC.get("Amazon")}day`)
	}

}

let maxTime = function() {
	let a = mapC.get("Cisco")
	let b = mapC.get("IBM")
	let c = mapC.get("Microsoft")
	let d = mapC.get("Amazon")

	if(a == Math.max(a, b, c, d)) {
		console.log(`${mapA.get("Cisco")} / ${mapB.get("Cisco")} / ${mapC.get("Cisco")}day`)
	}else if(b == Math.max(b, a, c, d)) {
		console.log(`${mapA.get("IBM")} / ${mapB.get("IBM")} / ${mapC.get("IBM")}day`)
	}else if(c == Math.max(a, b, c, d)) {
		console.log(`${mapA.get("Microsoft")} / ${mapB.get("Microsoft")} / ${mapC.get("Microsoft")}day`)
	}else if(d == Math.max(a, b, c, d)) {
		console.log(`${mapA.get("Amazon")} / ${mapB.get("Amazon")} / ${mapC.get("Amazon")}day`)
	}

}

lowPrice();

lowTime();

maxPrice();

maxTime();