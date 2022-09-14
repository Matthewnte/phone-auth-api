export interface Profile {
  name: string
  email: string
  phoneNumber: string
}

export interface DB {
  create: (profileInfo: Profile) => Promise<string>
  findByPhone: (phoneNumber: string) => Promise<Profile | null>
  update: ({
    phoneNumber,
    ...profileInfo
  }: Profile) => Promise<Partial<Profile> | null>
}

export interface ProfileService {
  create: (profile: Profile) => Promise<Profile | string>
  get: (phoneNumber: string) => Promise<Profile>
  update: (
    phoneNumber: string,
    data: Profile,
  ) => Promise<Partial<Profile> | null>
}
