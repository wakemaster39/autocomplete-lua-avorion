interface StringConstructor {
    isNullOrEmpty(str: string): boolean;
    isNullOrBlank(str: string): boolean;
}

String.isNullOrEmpty = function(str: string): boolean{
  return (!str || 0 === str.length);
}
String.isNullOrBlank = (str: string) => (!str || /^\s*$/.test(str));
