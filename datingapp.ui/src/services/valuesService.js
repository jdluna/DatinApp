import httpService from "./httpService";

const apiEndpoint = "/values";

export function getValues() {
  return httpService.get(apiEndpoint);
}

export default {
  getValues
};
