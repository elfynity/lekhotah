export async function connectJSON() {

  const res = await fetch('https://lekhotah.devdesign.co.za/json/data.json', { 
		cache: 'no-store' 
	});

  if (!res.ok) throw new Error('Failed to connect to JSON');
	
	return res.json();  

}