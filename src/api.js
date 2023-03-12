import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;

const options = {
  headers: {
    "X-API-Key": "9a65c340",
  },
};

export const verifyFile = async (image, pokemonName, type) => {
  const path =
    type === "model" ? "/se15/uploads/ml-model" : "/se15/uploads/pokemon";
  const url = baseUrl + path;
  const formData = new FormData();
  formData.append("file", image);
  formData.append("pokemon_name", pokemonName);
  try {
    const { data } = await axios.post(url, formData, options);
    console.log("🚀 ~ file: api.js:20 ~ verifyFile ~ data:", data)
    return data;
  } catch (error) {
    throw error;
  }
};

export const predictMl = async (data) => {
  const {
    modelFileData,
    pokemonFileData,
    pokemonName,
    mlLirary,
    threshold,
    nnType,
  } = data;

  if(mlLirary === "tensorflow" && (!threshold || !nnType)){
      throw new Error("Provide all required fields");
  }

  const url = baseUrl + "/se15/inference/predict-element-types";

  const formData = new FormData();
  formData.append("ml_model_file", modelFileData);
  formData.append("pokemon_image_file", pokemonFileData);
  formData.append("ml_library", mlLirary);
  formData.append("pokemon_name", pokemonName);
  formData.append("nn_type", mlLirary === "scikit-learn" ? null : nnType);
  formData.append(
    "nn_prediction_threshold",
    mlLirary === "scikit-learn" ? null : threshold
  );

  try {
    const { data } = await axios.post(url, formData, options);
    return data;
  } catch (error) {
    throw error;
  }
};
