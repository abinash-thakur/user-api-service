import { Repository } from 'typeorm';
import { UserProfileEntity } from '../entities/userProfiles.entity';

export class UserProfileRepository extends Repository<UserProfileEntity> {}
