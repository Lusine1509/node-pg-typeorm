import {
	Entity,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	OneToMany,
	ManyToMany,
    BaseEntity,
	PrimaryGeneratedColumn
} from 'typeorm';
import { Product } from './Product';
import { Transaction } from './Transaction';


@Entity('customer')
export class Customer extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	lastName: string;

	@Column({
		unique: true,
	})
	email: string;

	@Column({
		unique: true,
		length: 10,
	})
	cardNumber: string;
	@Column({
		type: 'numeric',
	})
	balance: number;

	@Column({
		name: 'active',
		default: true,
	})
	is_active: boolean;

	@Column({
		type: 'simple-json',
		nullable: true,
	})
	additional_info: {
		age: number;
		hair_color: string;
	};

	@Column({ type: 'simple-array', default: [] })
	family_members: string[];

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@ManyToMany((type) => Product, {
		cascade: true,
	})
	products: Product[];

	@OneToMany(
		() => Transaction,
		(transaction) => transaction.customer
	)
	transactions: Transaction[];
}