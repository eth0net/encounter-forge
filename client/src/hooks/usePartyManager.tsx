import { useMemo, useState } from 'react';
import { Party } from '../models';

export const usePartyManager = () => {
  const [party, setParty] = useState<Party>([{ level: 1, count: 1 }]);

  const addGroup = useMemo(() => {
    return () => setParty([...party, { level: 1, count: 1 }]);
  }, [party, setParty]);

  const removeGroup = useMemo(() => {
    return (index: number) => {
      const newParty = [...party];
      newParty.splice(index, 1);
      setParty(newParty);
    };
  }, [party, setParty]);

  const incrementGroupLevel = useMemo(() => {
    return (index: number) => {
      const newParty = [...party];
      newParty[index].level < 20 && newParty[index].level++;
      setParty(newParty);
    };
  }, [party, setParty]);

  const decrementGroupLevel = useMemo(() => {
    return (index: number) => {
      const newParty = [...party];
      newParty[index].level > 1 && newParty[index].level--;
      setParty(newParty);
    };
  }, [party, setParty]);

  const incrementGroupCount = useMemo(() => {
    return (index: number) => {
      const newParty = [...party];
      newParty[index].count++;
      setParty(newParty);
    };
  }, [party, setParty]);

  const decrementGroupCount = useMemo(() => {
    return (index: number) => {
      const newParty = [...party];
      newParty[index].count > 1 && newParty[index].count--;
      setParty(newParty);
    };
  }, [party, setParty]);

  return {
    party,
    setParty,
    addGroup,
    removeGroup,
    incrementGroupLevel,
    decrementGroupLevel,
    incrementGroupCount,
    decrementGroupCount,
  };
};

export type PartyManager = ReturnType<typeof usePartyManager>;

export default usePartyManager;
