#!/usr/bin/env python3
"""
something something hedgehog
"""


def insert_school(mongo_collection, **kwargs):
    """
    something something echidna
    :param mongo_collection:
    :return:
    """
    i = mongo_collection.insert_one(kwargs)
    return i.inserted_id
