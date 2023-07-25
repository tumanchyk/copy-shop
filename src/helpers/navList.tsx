interface ICategory {
    category: string;
    id: number;
}
export const navList: ICategory[] = [{ category: 'Жінкам', id: 123 }, { category: 'Чоловікам', id: 12 }, { category: 'Дівчаткам', id: 1003 }, { category: 'Хлопчикам', id: 1093 }, { category: 'Дім', id: 113 }]

export const headerNav: ICategory[] = [{ category: 'Розпродаж До -70%', id: 1093 }, { category: 'Новинки', id: 923 }, ...navList]