import { AddressItem } from '@modules/types';

export const getZoneCode = async (address: AddressItem): Promise<string> => {
  return address.zoneCode;
};
