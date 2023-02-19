import axios from "axios";

const baseUrl = "https://my.api.mockaroo.com"  || "";

const options = {
    headers :{
        "X-API-Key": "9a65c340"
    }
}

export const verifyFile = async (image, type) => {
  const path = type === "model" ? "/upload/ml-model" : "/upload/pokemon";
  const url = baseUrl + path;
  const formData = new FormData();
  formData.append("file", image);
  try {
    const { data } = await axios.post(url, formData,options);
    return data;
  } catch (error) {
    throw error;
  }
};

export const predictMl = async (mlImage, pokemanImage) => {
  const url = "https://my.api.mockaroo.com/inference/prediction-result"
  const formData = new FormData();
//   formData.append("ml_model_file", mlImage);
//   formData.append("pokemon_image_file",pokemanImage);
  formData.append("ml_library","test")
  formData.append("pokemon_name","ziba");

  try {
    const { data } = await axios.post(url, formData,options);
    return data;
  } catch (error) {
    throw error;
  }
};
