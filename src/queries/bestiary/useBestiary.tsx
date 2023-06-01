import use5eTools from "./use5eTools";

export function useBestiary({ enable5eTools = true }: { enable5eTools: boolean }) {
  const { monsters } = use5eTools(enable5eTools);

  // const sort: string = "name";
  // monsters = useMemo(() => {
  //   switch (sort) {
  //     case "name":
  //       return monsters.sort((a, b) => a.name.localeCompare(b.name));
  //     case "cr":
  //       return monsters.sort((a, b) => a.cr - b.cr);
  //     default:
  //       return monsters;
  //   }
  // }, [monsters, sort]);

  return { monsters };
}

export default useBestiary;
