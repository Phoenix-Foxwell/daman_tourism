const cusSubstring = (str: string, numbettosub: number = 8, prefix: string = "..."): string => {
    if (str.length <= numbettosub) return str;
    return (`${str.substring(0, numbettosub)}${prefix}`);
}

export { cusSubstring };