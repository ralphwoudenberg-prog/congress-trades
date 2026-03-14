exports.handler = async function(event, context) {
  try {
    const response = await fetch(
      "https://house-stock-watcher-data.s3-us-east-2.amazonaws.com/data/all_transactions.json"
    );
    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "public, max-age=3600" // cache 1 uur
      },
      body: JSON.stringify(data)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Kon House data niet ophalen: " + err.message })
    };
  }
};
