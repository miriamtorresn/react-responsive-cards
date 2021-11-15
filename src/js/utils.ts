export const getMachineName = (str: string) => {
  return str.toLowerCase().replace(/[^a-zA-Z/s]/g, "-");
};
