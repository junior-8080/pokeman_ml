import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL || "https://my.api.mockaroo.com";

const options = {
  headers: {
    "X-API-Key": "9a65c340",
  },
};

export const verifyFile = async (image, type) => {
  const path = type === "model" ? "/upload/ml-model" : "/upload/pokemon";
  const url = baseUrl + path;
  const formData = new FormData();
  formData.append("file", image);
  try {
    const { data } = await axios.post(url, formData, options);
    return data;
  } catch (error) {
    throw error;
  }
};

export const predictMl = async (data) => {
  const { modelFileData, pokemonFileData, pokemonName, mlLirary } = data;
  const url = baseUrl + "/inference/prediction-result";

  const formData = new FormData();
  formData.append("ml_model_file", modelFileData);
  formData.append("pokemon_image_file", pokemonFileData);
  formData.append("ml_library", mlLirary);
  formData.append("pokemon_name", pokemonName);

  try {
    const { data } = await axios.post(url, formData, options);
    return data;
  } catch (error) {
    throw error;
  }
};
