import {
	Entity,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	ManyToMany,
	JoinTable,
    BaseEntity,
    PrimaryGeneratedColumn
} from 'typeorm';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

import { Customer } from './Customer';


@Entity('product')
export class Product extends BaseEntity {

	
    @PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;


	@Column({ 
		type: 'numeric' 
	})
	quantity: number;

	@Column()
	in_stock: boolean;



	@ManyToMany((type) => Customer, {
		cascade: true,
	})
	@JoinTable({
		name: 'orders',
		joinColumn: {
			name: 'product',
			referencedColumnName: 'id',
		},
		inverseJoinColumn: {
			name: 'customer',
			referencedColumnName: 'id',
		},
	})
	customers: Customer[];

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}