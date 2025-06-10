export const ENV = {
  JSON_SERVER_URL: getEnvVariable('JSON_SERVER_URL'),
};

function getEnvVariable(key: string) {
  const value = process.env[key];

  if (!value) {
    throw new Error(`환경 변수 ${key}가 누락되었습니다.`);
  }
  return value;
}
