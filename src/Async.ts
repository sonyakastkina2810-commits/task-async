// 1. mock: Promise, который через `ms` миллисекунд резолвится значением `ms`
export function mock(ms: number): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => resolve(ms), ms);
    });
}

// 2. getData: запускаем все запросы параллельно
export function getData(): Promise<number[]> {
    return Promise.all([mock(100), mock(200), mock(300)]);
}

// 3. catchException: async/await, чтобы try/catch поймал отклонённый Promise
export async function catchException(): Promise<string> {
    try {
        await Promise.reject(new Error('my error'));
    } catch (err) {
        return (err as Error).message;
    }
    return '';
}