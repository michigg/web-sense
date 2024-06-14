export function useJson() {
  const stringifyJSON = (json: object) => {
    return JSON.stringify(json, replacer, 2)
  }

  const parseJSON = (text: string) => {
    return JSON.parse(text, reviver)
  }

  const replacer = (key: string, value: unknown) => {
    // see https://stackoverflow.com/questions/29085197/how-do-you-json-stringify-an-es6-map
    if (value instanceof Map) {
      return {
        dataType: 'Map',
        value: Array.from(value.entries()), // or with spread: value: [...value]
      };
    } else {
      return value;
    }
  }

  const reviver = (key: string, value: unknown) => {
    if (typeof value === 'object' && value !== null && 'dataType' in value && value.dataType === 'Map' && 'value' in value) {
      return new Map(value.value as [unknown, unknown][]);
    }
    return value;
  }
  return {stringifyJSON, parseJSON}
}
