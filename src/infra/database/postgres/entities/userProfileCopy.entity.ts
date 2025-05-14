import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('user_profile_copy')
export class UserProfileCopyEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'user', type: 'varchar', length: 255, nullable: true })
    user?: string;

    @Column({ name: 'class', type: 'varchar', length: 255, nullable: true })
    class?: string;

    @Column({ name: 'age', type: 'int', nullable: true })
    age?: number;

    @Column({ name: 'email', type: 'varchar', length: 255, nullable: true })
    email?: string;

    @Column({ name: 'inserted_at', type: 'timestamp with time zone', nullable : false})
    insertedAt: Date;

    @UpdateDateColumn({ type: 'timestamp with time zone'})
    modifiedAt: Date;
}
