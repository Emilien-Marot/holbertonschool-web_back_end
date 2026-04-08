#!/usr/bin/env python3
"""
here you go
"""
import typing
from asyncio import create_task, Task
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> Task:
    """
    here we go
    :param n
    :param max_delay:
    :return:
    """
    return create_task(wait_random(max_delay))
