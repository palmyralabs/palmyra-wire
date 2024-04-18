import '@testing-library/jest-dom'
import { StringFormat } from 'lib/palmyra/utils/StringUtil';

test('StringFormat', () => {
    const value = '/app/palmyra/{sensorId}';
    const data = {sensorId: 23};
    const fv = StringFormat(value, data);
    expect(fv).toBe('/app/palmyra/23')
})


