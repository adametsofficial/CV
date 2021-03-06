import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TitlePage } from '../../dto/TitlePage.dto';
import { ContactsEntity } from '../../../../Models/contacts.entity';
import { ContactDto } from '../../../../Dto/contactsDto/Contact.dto';
import { ContactsDto } from './dto/Contacts.dto';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(ContactsEntity)
    readonly _contact: Repository<ContactsEntity>,
  ) {}

  async pageList(): Promise<ContactsDto & TitlePage> {
    const contacts = await this._contact.find();

    return { contacts, title: 'Contacts' };
  }

  async add(contact: ContactDto): Promise<void> {
    await this._contact.insert(contact);
  }

  async edit(editedContact: ContactDto): Promise<void> {
    await this._contact.update(editedContact.id, editedContact);
  }

  async delete(id: string): Promise<void> {
    await this._contact.delete(id);
  }
}
