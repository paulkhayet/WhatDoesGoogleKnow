// functions/generateTimestamp.js

exports.generateTimestamp = async (context) => {
    const timestamp = Date.now().toString();
    context.options.env = {
      ...context.options.env,
      timestamp,
    };
  };
  