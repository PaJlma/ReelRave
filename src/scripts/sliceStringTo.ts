const sliceStringTo = (string: string | undefined, index: number): string => {
    if (string === undefined) return '';
    if (string.length >= index) {
        return string.slice(0, index) + '...';
    } else {
        return string;
    }
}

export default sliceStringTo;