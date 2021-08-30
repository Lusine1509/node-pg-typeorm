import {
	Entity,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	PrimaryGeneratedColumn,
	ManyToOne,
	JoinColumn,
	BaseEntity,
} from 'typeorm';
import { Customer } from './Customer';

export enum TransactionType {
	DEPOSIT = 'deposit',
	WITHDRAW = 'withdraw',
}

@Entity('transaction')
export class Transaction extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		type: 'enum',
		enum: TransactionType,
	})
	type: string;

	@Column({
		type: 'numeric',
	})
	amount: number;

	@ManyToOne(
		() => Customer,
		(customer) => customer.transactions,
		{
			onDelete: 'CASCADE',
		}
	)
	@JoinColumn({
		name: 'customer_id',
	})
	customer: Customer;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}