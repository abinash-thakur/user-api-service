import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user_profiles')
export class UserProfileEntity {
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

    @CreateDateColumn({
        type: 'timestamp with time zone',
    })
    insertedAt: Date;
}
